import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


async function main(){
    try{
       
        const channel = {name: "The Godfather", description: "This is a novel turned movie.", rating: 4, director: "Francis Ford Coppola"};
        const res = await prisma.movie_lists.delete({
            where: {
                id: 1, 
            },  
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