import React from "react";
import Carousel from "react-material-ui-carousel";
import { ComplicationsCard } from "./ComplicationsCards";

import { complications } from "../../research";

export default function ComplicationsCarousel() {
  return (
    <Carousel>
      
            {
                complications.listOfComps.map( (complication, i) => <ComplicationsCard key={i} name={complication.name} description={complication.description} recommendation={complication.recommendation} video={complication.video} image={complication.image} imageText={complication.imageText}/> )
            }
    </Carousel>
  );
}