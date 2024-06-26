
import {getImageUrl} from "../../utlis";
"use client";

import { Carousel } from "flowbite-react";

function Achievements() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slideInterval={5000}>
        <img src={getImageUrl('achievements/photo_1.png')} alt="..." />
        <img src={getImageUrl('achievements/photo_2.png')} alt="..." />
        <img src={getImageUrl('achievements/photo_3.png')}alt="..." />
      </Carousel>
    </div>
  );
}
export default Achievements