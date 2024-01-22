function agregate (elements){
    aggregate (elements,0,(a,b)=> a+b)
    aggregate (elements,0,(a,b)=>a+1/b);
    aggregate (elements,'',(a,b)=>a+b);

    function aggregate(arr,initial,func){
        let val = initial
        for (let i =0; i<arr.length; i ++){
            val = func(val,arr[i]);
        }
            console.log(val);
        
    }


}
agregate([1, 2, 3])