from django.db import models

class Songs(models.Model):
    name=models.CharField(max_length=20)
    genre=models.CharField()

    def __str__(self) -> str:
        return self.name
