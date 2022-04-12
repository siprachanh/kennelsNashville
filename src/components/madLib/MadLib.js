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
    Would it surprise you to learn that the most majestic {madLib.pluralNoun1} in 
    the world eat garbage? Well, they do! Everything from {madLib.adjective1} 
    soda cans to {madLib.noun}-stained {madLib.typeOfFood} boxes to used 
    {madLib.articleOfClothing} - and more! Some have been spotted {madLib.verbEndingIning} 
    dumpsters and then using their long {madLib.pluralNoun2} to spear as
    many bags of {madLib.pluralNoun3} as they can before being caught. According
    to an interview with the {madLib.numberVal} Minutes News, {madLib.celebrity} once came
    home to find a/an {madLib.color} unicorn {madLib.verbEndingIning2} up in the 
    recycling bin. The poor thing had mistaken leftover {madLib.typeOfFood} for 
    dried up {madLib.pluralNoun}. "It was a/an {madLib.adjective3} mistake. I am a good cook!"
    </>
);
}