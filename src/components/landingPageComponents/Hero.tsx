import HeroIllustration from '../../assets/images/HeroIllustration.svg';

const Hero = () => {
    return (
        <div className='flex flex-row justify-between bg-[#F3F9FE] min-h-[470px] items-center'>
            <div className='px-10 flex flex-col gap-3'>
                <h1 className="text-6xl font-bold text-[#2F2F2F]">Aqylapps</h1>
                <h1 className="text-4xl font-bold text-[#4B02BA]">Платформа по обучению</h1>
                <p className="text-[14px] text-gray-500">использование Искусственного Интеллекта (ИИ) в школах и университетах</p>
                <button className="cursor-pointer w-fit text-white text-[14px] px-5 py-1 rounded-lg bg-[#220154]">Вход</button>
            </div>
            <div>
                <img src={HeroIllustration} alt="Hero Illustration" className='w-[600px]' />
            </div>
        </div>
    )
}

export default Hero;