import {IServiceImages, serviceImages} from "../../constants/serviceImages.ts";
import {UseLangChange} from "../../store/UseLangChange.ts";

const Services = () => {
    const lang:string = UseLangChange((state)=> state.language)

    return (
        <div className='mb-20'>
            <div className='text-center text-4xl font-bold text-[#4B02BA]'>
                <h1>Наши услуги</h1>
            </div>
            <div className='flex flex-row justify-between mt-10 px-10'>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-3xl w-[390px] font-medium '>Мы предлагаем <span className='text-[#220154]'>решения</span> для всех категорий пользователей</h1>
                    <p className='text-[15px] text-[#220154] w-[370px] font-light italic'>Создаём возможности для каждого,
                        кто стремится к знаниям</p>
                </div>
                <div className='flex flex-row gap-4'>
                    {serviceImages.map((item:IServiceImages)=>(
                        <div className=' relative h-[250px] w-[150px] rounded-2xl  overflow-hidden' key={item.id}>
                            <img src={item.img_src} alt='Service Img' className='rounded-2xl object-cover h-full w-full'/>
                            <p className='absolute bottom-0 left-0 right-0 text-[13px]  flex justify-center items-center text-white bg-gray-600 px-2 py-1  '>{item.title[lang].description}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Services;