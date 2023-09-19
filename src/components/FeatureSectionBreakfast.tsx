import ProductCard from "./ProductCard"

const data =[
    {id:0,img:"noodles.jpg",name:"Fresh fruits",price:"$10"},
    {id:1,img:"momo.webp",name:"Fresh fruits",price:"$10"},
    {id:2,img:"samosha.jpg",name:"Fresh fruits",price:"$10"},
    {id:3,img:"pakoda.jpg",name:"Fresh fruits",price:"$10"},
]

const FeatureSectionBreakfast = () => {
  return (
    <div className="container pt-16">
      <div className="lg:flex justify-between items-center ">
        <div>
        <h3 className="font-medium text-2xl">
        Breakfast and Dairy
        </h3>
        <p className="text-gray-600 mt-2">Best Quality Breakfast online at best prices</p>
        </div>
      <div className="space-x-4 mt-8 lg:mt-0">
        <button className="feature_btn">Eggs</button>
        <button className="text-gray-600 hover:text-accent">Pizza</button>
        <button className="text-gray-600 hover:text-accent">Snacks</button>
      </div>
    </div>

    <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
        <div>
            <img className="w-full h-full object-cover" src="breakfast.webp" alt="banner" />
        </div>
        {data.map((el)=><ProductCard key={el.id} img={el.img} name={el.name} price={el.price} />)}
    </div>
    </div>
  )
}

export default FeatureSectionBreakfast
