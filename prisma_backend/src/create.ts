import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


async function main(){
    try{
        const data =[
            {name: "The Godfather", description: "This is a novel turned movie.", rating: 4, director: "Francis Ford Coppola"},
            {name: "The Godfather 2", description: "This is a novel turned movie.", rating: 4, director: "Francis Ford Coppola"},
            {name: "The Godfather 3", description: "This is a novel turned movie.", rating: 4, director: "Francis Ford Coppola"},
            {name: "The Godfather", description: "This is a novel turned movie.", rating: 4, director: "Francis Ford Coppola"},

        ]; 
        const channel = {name: "The Godfather", description: "This is a novel turned movie.", rating: 4, director: "Francis Ford Coppola"};
        const res = await prisma.movie_lists.create({
            data: channel 
        }); 
        console.log(res); 

        
    }
    catch(err){
        console.log(err)
    }finally{
        async()=> {
            await prisma.$disconnect(); 
        }
    }
}

main();