import studentImg from '../assets/images/studentsImage.jpg'
import employeeImg from '../assets/images/employeesImage.jpg'
import teachersImg from '../assets/images/teachersImage.jpg'
import leadersImg from '../assets/images/leadersImage.jpg'

export interface IServiceImages {
    id: string,
    img_src: string,
    title: ITitle
}
export interface ITitle {
    en: {
        description: string,
    }
    ru: {
        description: string,
    },
    kz: {
        description: string,
    },
}
export const serviceImages:IServiceImages[] = [
    {
        id: '1',
        img_src: studentImg,
        title: {
            en: {
                description: 'Courses for students'
            },
            ru: {
                description: "Курсы для студентов"
            },
            kz: {
                description: 'Оқушыларға арналған курстар'
            }
        }
    },
    {
        id: '2',
        img_src: teachersImg,
        title: {
            en: {
                description: 'Courses for teachers'
            },
            ru: {
                description:"Курсы для учителей"
            },
            kz: {
                description:'Мұғалімдерге арналған курстар'
            }
        }
    },
    {
        id: '3',
        img_src: employeeImg,
        title: {
            en: {
                description:'Courses for employees'
            },
            ru: {
                description:"Курсы для сотрудников"
            },
            kz: {
                description:'Кызметкерлерге арналған курстар'
            }
        }
    },
    {
        id: '4',
        img_src: leadersImg,
        title: {
            en: {
                description:'Courses for companies'
            },
            ru: {
                description:"Курсы для организаций"
            },
            kz: {
                description:'Компанияларға арналған курстар'
            }
        }
    },

]