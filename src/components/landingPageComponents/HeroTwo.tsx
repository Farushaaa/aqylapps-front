import Illustration from '../../assets/images/Illustration2.svg'

const HeroTwo = () => {
    return (
        <div className='mt-5'>
            <div className='text-center '>
                <h1 className='text-4xl text-[#4B02BA] font-bold'>Откройте возможности ИИ для всех:</h1>
                <h2 className='text-2xl text-[#2F2F2F] font-semibold'>от учеников до профессионалов</h2>
            </div>
            <div className='flex flex-row justify-between items-center '>
                <div className='w-[700px] flex flex-col gap-5 px-10'>
                    <p className='text-[15px] text-gray-500'> <span className='font-bold text-[#220154]'>Aqylapps.AI</span> предлагает курсы и платформы по Искусственному Интеллекту для <span className='font-bold'>школ, университетов, образовательных организаций и бизнесов </span></p>
                    <p className='text-[15px] text-gray-500'>Наши курсы и платформы помогут вам внедрить ИИ в учебный процесс, <span className='font-bold'>повысить производительность сотрудников и улучшить качество преподавания</span>. </p>
                    <p className='text-[15px] text-gray-500'>Независимо от вашего уровня подготовки — школьник, преподаватель или сотрудник компании — наши решения по ИИ помогут вам  <span className='font-bold'>эффективно освоить</span> современные технологии и <span className='font-bold'>применять</span> их как в работе так и в повседневной жизни</p>
                </div>
                <div >
                    <img className='w-[500px] h-[400px] px-5 ' src={Illustration} alt='Illustration' />
                </div>
            </div>
        </div>
    )
}
export default HeroTwo;