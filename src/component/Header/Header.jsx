import profile from'../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between container m-auto p-4 
        border-b-2 items-center'>
            <h1 className='text-3xl font-bold
             text-red-400'>React Knowledge Cafa</h1>
             <img src={profile} alt="" />
        </header>
    );
};

export default Header;