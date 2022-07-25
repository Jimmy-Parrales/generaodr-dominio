let pronoum=["the","our"];
let adj =["great","big"];
let noun=["jogger","raccon"];


for(var i=0; i < pronoum.length; i++){
    for(var x=0; x < adj.length; x++){
        for(var c=0; c < noun.length; c++){
            document.write("<li>"+pronoum[i]+adj[x]+noun[c]+".com"+"</li>");            
        }
    }
}


console.log("joder");