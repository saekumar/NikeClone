import { star } from '../assets/icons'

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full bg-white shadow-xl cursor-pointer rounded-xl">
      <img src={imgURL} alt={name} className="w-[282px] h-[282px] xl:ml-6" />
      <div className="mt-8 flex justify-start gap-2.5 xl:ml-6">
        <img src={star} alt="rating icon" width={24} height={24} />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          (4.5)
        </p>
      </div>
      <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin xl:ml-6">
        {name}
      </h3>
      <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal xl:ml-6">
        {price}
      </p>
    </div>
  )
}

export default PopularProductCard
