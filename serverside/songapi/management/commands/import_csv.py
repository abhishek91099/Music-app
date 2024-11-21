import csv
from django.core.management.base import BaseCommand
from songapi.models import Song, Album, Artist
from datetime import datetime

class Command(BaseCommand):
    help = "Import songs from a CSV file"

    def handle(self, *args, **kwargs):
        with open(r'D:\song_metadata.csv', mode='r') as file:
            reader = csv.DictReader(file)
            for row in reader:
                title = row['title']
                artist_names = row['artist'].split(', ')  # Artists are separated by comma
                album_name = row['album']
                genre = row['genre']
                release_year = row['release_date']
                if not release_year or release_year == "Unknown":
                    release_year = None  # You can set a default value or leave it as None
                else:
                    release_year = int(release_year)
                audio_path = row['audio_path']
                album_art_path = row['album_art_path']

                # Convert to date format if necessary
                release_date = datetime.strptime(str(release_year), '%Y').date() if release_year else None

                # Create or get artist(s)
                artists = []
                for artist_name in artist_names:
                    artist, created = Artist.objects.get_or_create(name=artist_name)
                    artists.append(artist)

                # Create or get album
                album, created = Album.objects.get_or_create(
                    title=album_name,
                    genre=genre,
                    release_year=release_year
                )
                album.artists.set(artists)

                # Create song
                song = Song.objects.create(
                    title=title,
                    audio_path=audio_path,
                    album_art_path=album_art_path,
                    album=album,
                    release_date=release_date
                )
                song.artists.set(artists)

                self.stdout.write(self.style.SUCCESS(f'Successfully imported song: {title}'))
