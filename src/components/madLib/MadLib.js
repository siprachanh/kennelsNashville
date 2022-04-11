import React, { useEffect, useState } from "react";

export const MadLib = () => {
    const [madLib, setMadLib] = useState ([]);

    useEffect (() => {
        setMadLib(
 
    {
        pluralNoun1: "unicorns",
        adjective1: "pretty",
        noun: "street",
        typeOfFood: "mexican",
        articleOfClothing: "dickey",
        verbEndingIning: "wallowing",
        pluralNoun2: "trees",
        pluralNoun3: "lasers",
        numberVal: "113",
        celebrity: "Taylor Swift",
        color: "golden rod",
        verbEndingIning2: "licking",
        typeOfFood: "Italian sweets",
        pluralNoun: "concrete shoes",
        adjective2: "gloomy",
        adjective3: "claustrophobic"
     })
    }, []);



return (
    <> 
    Would it surprise you to learn that the most majestic {MadLib.pluralNoun1} in 
    the world eat garbage? Well, they do! Everything from {MadLib.adjective1} 
    soda cans to {MadLib.noun}-stained {MadLib.typeOfFood} boxes to used 
    {MadLib.articleOfClothing} - and more! Some have been spotted {MadLib.verbEndingIning} 
    dumpsters and then using their long {MadLib.pluralNoun2} to spear as
    many bags of {MadLib.pluralNoun3} as they can before being caught. According
    to an interview with the {MadLib.numberVal} Minutes News, {MadLib.celebrity} once came
    home to find a/an {MadLib.color} unicorn {MadLib.verbEndingIning2} up in the 
    recycling bin. The poor thing had mistaken leftover type of food for 
    dried up {MadLib.pluralNoun}. "It was a/an {MadLib.adjective3} mistake. I am a good cook!"
    </>
);
}