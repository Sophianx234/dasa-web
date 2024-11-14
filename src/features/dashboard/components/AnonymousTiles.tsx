import AnonymousTile from "./AnonymousTile";

function AnonymousTiles() {
  return (
    <div className="pt-5">
               <h1 className="px-5 dash-title">
                Anonymous
                </h1> 
      
      <AnonymousTile to="Aisha" message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa alias magnam adipisci quo maxime omnis?" time="2 months ago"
      title="Anonymous"/>
      <AnonymousTile to="Aisha" message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa alias magnam adipisci quo maxime omnis?" time="2 months ago"
      title="Anonymous"/>
      <AnonymousTile to="Aisha" message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa alias magnam adipisci quo maxime omnis?" time="2 months ago"
      title="Anonymous"/>
    </div>
  );
}


export default AnonymousTiles;
