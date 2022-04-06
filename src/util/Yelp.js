
const apiKey = "PMWJZQBoD9eUxRpFvDHdoRkfEmXCrp3IA-FyqGGm75IbvROIVTNaEeATEB50GuR6WIH7PCRl2xiWd6I3FTe57JsWMSnBMkwg4ELr55o-9te-5W_Kiw0pacxz7KEVYnYx";
const Yelp = {


    searchYelp(term, location, sortBy) {
        return fetch(`https://corsanywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers : {
                Authorization : `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if(jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address : business.location.address1,
                        city : business.location.city,
                        state : business.location.state,
                        zipCode : business.location.zip_code,
                        category : business.categories[0].title,
                        rating : business.rating,
                        reviewCount : business.review_count
                    }
                });
            }
        })
    }
};

export default Yelp;

