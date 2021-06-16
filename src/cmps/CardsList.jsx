import {CardPreview} from './CardPreview'
export function CardsList() {
  const cards = [
      {
          description:' “The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”',
          name:'Kady Baker',
          job:'Product Manager at Bookmark',
          src:'imgs/worker1.png'
      },
      {
        description:' “We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”',
        name:'Aiysha Reese',
        job:'Founder of Manage',
        src:'imgs/worker2.png'
      },
      {
        description:'“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”',
        name:'Arthur Clarke',
        job:'Co-founder of MyPhysio',
        src:'imgs/worker3.png'
      }
  ];
  return (
    <div className="cards-section-container">
        <img src="imgs/RectangleDarker.png" alt="img" className="top-img-card-container"/>
        <img src="imgs/shapeBottom.png" alt="img" className="bottom-img-card-container"/>
        <img src="imgs/Combined_Shape.png" alt="img" className="bottom-img-secondery"/>
      <div className="cards-section-headline">
        <h2>
          Delivering real results for top companies. Some of our{" "}
          <span>success stories.</span>
        </h2>
      </div>
      <div className="cards-list-container">
          {
              cards.map((card,idx)=>{
                  return <CardPreview key={idx} card={card}/>
              })
          }
      </div>
    </div>
  );
}
