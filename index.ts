{
    function formatString(input: string, toUpper?: boolean): string {
        if(toUpper === false){
            return input.toLowerCase();
        }else {
            return input.toUpperCase();
        }
    }


    function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
        return items.filter(item => item.rating >= 4);
    }


    

}