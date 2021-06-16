import {ItemPreview} from './ItemPreview'
export function HeroSection() {
    const list = [
        {
            src:"imgs/graphShape.png",
            title:"Experienced Individuals",
            description:"Our network is made up of highly experienced professionals who are passionate about what they do."
        },
        {
            src:"imgs/settings_Shape.png",
            title:"Easy to Implement",
            description:"Our network is made up of highly experienced professionals who are passionate about what they do."
        },
        {
            src:"imgs/person_Shape.png",
            title:"Enhanced Productivity",
            description:"Our network is made up of highly experienced professionals who are passionate about what they do."
        }
    ];
    return (
        <div className="hero-section-container flex">
            <div className="hero-section-content">
                <img src="imgs/Rectangle.png" alt="img"/>
                <h2>Build & manage distributed teams like no one else.</h2>
            </div>
            <div className="hero-section-list">
                {
                    list.map((item,idx)=>{
                        return <ItemPreview key={idx} item={item}/>
                    })
                }
            </div>
            
        </div>
    )
}
