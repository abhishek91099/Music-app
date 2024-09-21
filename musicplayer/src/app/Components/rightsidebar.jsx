
import MailIcon from '@mui/icons-material/Mail';
import SettingsIcon from '@mui/icons-material/Settings';
export const Rightsidebar = () => {
  return (
    <div className="flex flex-col bg-purple-950 text-white w-full h-full justify-start pt-5 items-center">
      <div className='flex flex-row justify-around w-full items-center '>

        
        <div className='flex flex-row'> <img className='w-10 rounded-full object-cover' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSimEtPETyjcf7d6lLiYWlycjTLSIobmoobPA&s'/>Abhishek</div>
        <div><MailIcon/><SettingsIcon/></div>

      </div>
      <div>

      </div>
      <div>Sales support</div>
    </div>
  );
};
