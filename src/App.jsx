import './App.css'
import Divider from './components/Divider'
import Heading from './components/Heading'

function App() {
	return (
		<div>
			{/* banner image */}
			<div className='mx-auto max-w-3xl md:px-8 md:pt-8 '>
				<img
					className='md:rounded-xl object-cover'
					src='/images/image-omelette.jpeg'
					alt='food'
				/>
			</div>
			{/* banner image end */}

			<div className='mx-auto max-w-3xl px-8 py-12'>
				{/* section 1 */}
				<section>
					<h1 className='text-4xl font-serif text-stone-900 mb-6'>
						Simple Omelette Recipe
					</h1>

					<p className='text-stone-600 mb-6 font-sans'>
						An easy and quick dish, perfect for any meal. This classic omelette
						combines beaten eggs. cooked to perfection, optionally filled with
						your choice of cheese, vegetables, or meats.
					</p>

					<div className='p-6 bg-rose-50 rounded-md mb-8'>
						<h2 className='text-2xl font-sans text-rose-800 mb-4 font-semibold'>
							Preparation time
						</h2>

						<ul className='text-stone-600 font-sans list-disc pl-6 marker:text-rose-800'>
							<li className='pl-4 mb-2'>
								<span className='font-bold'>Total</span>: Approximately 10
								minutes
							</li>

							<li className='pl-4 mb-2'>
								<span className='font-bold'>Preparation</span>: 5 minutes
							</li>

							<li className='pl-4'>
								<span className='font-bold'>Cooking</span>: 5 minutes
							</li>
						</ul>
					</div>

					<div>
						<Heading>Ingredients</Heading>

						<ul className='text-stone-600 font-sans list-disc pl-6 marker:text-brown-800'>
							<li className='pl-4 mb-2'>2-3 large eggs</li>
							<li className='pl-4 mb-2'>Salt, to taste</li>
							<li className='pl-4 mb-2'>Pepper, to foste</li>
							<li className='pl-4 mb-2'>1 tablespoon of butter or all</li>
							<li className='pl-4 mb-2'>
								Optional fillings: cheese, diced vegetables, cooked meats, herbs
							</li>
						</ul>
					</div>
				</section>
				{/* section 1 end */}

				<Divider />

				{/* section 2 */}
				<section>
					<Heading>Instructions</Heading>

					<ol className='text-stone-600 font-sans list-decimal pl-6 marker:text-brown-800'>
						<li className='pl-4 mb-2'>
							<span className='font-bold'>Beat the eggs: </span>
							<span>
								In a bowl, beat the eggs with a pinch of salt and pepper until
								they are well mixed. You can add a tablespoon of water or milk
								for a fluffier texture.
							</span>
						</li>

						<li className='pl-4 mb-2'>
							<span className='font-bold'>Heat the pan: </span>
							<span>
								Place a non-stick frying pan over medium heat and add butter or
								oil.
							</span>
						</li>

						<li className='pl-4 mb-2'>
							<span className='font-bold'>Cook the omelette: </span>
							<span>
								Once the butter is melted and bubbling, pour in the eggs. Tilt
								the pan to ensure the eggs evenly coat the surface.
							</span>
						</li>

						<li className='pl-4 mb-2'>
							<span className='font-bold'>Add fillings (optional): </span>
							<span>
								When the eggs begin to set at the edges but are still slightly
								runny in the middle, sprinkle your chosen fillings over one half
								of the omelette.
							</span>
						</li>

						<li className='pl-4 mb-2'>
							<span className='font-bold'>Fold and serve: </span>
							<span>
								As the omelette continues to cook, carefully lift one edge and
								fold it over the fillings. Let it cook for another minute, then
								slide it onto a plate.
							</span>
						</li>

						<li className='pl-4 mb-2'>
							<span className='font-bold'>Enjoy: </span>
							<span>Serve hot, with additional salt and pepper if needed.</span>
						</li>
					</ol>
				</section>
				{/* section 2 end */}

				<Divider />

				{/* section 3 */}
				<section>
					<Heading>Nutrition</Heading>
					<p className='text-stone-600 font-sans mb-4'>
						The table below shows nutritional values per serving without the
						additional fillings.
					</p>

					<table className='w-full text-stone-600 font-sans border-collapse'>
						<tr className='border-b border-stone-150 w-full'>
							<td className='p-3 w-1/2'>Calories</td>
							<td className='p-3 w-1/2 font-bold text-brown-800'>277kcal</td>
						</tr>

						<tr className='border-b border-stone-150 w-full'>
							<td className='p-3 w-1/2'>Carbs</td>
							<td className='p-3 w-1/2 font-bold text-brown-800'>0g</td>
						</tr>

						<tr className='border-b border-stone-150 w-full'>
							<td className='p-3 w-1/2'>Protein</td>
							<td className='p-3 w-1/2 font-bold text-brown-800'>20g</td>
						</tr>

						<tr className='w-full'>
							<td className='p-3 w-1/2'>Fat</td>
							<td className='p-3 w-1/2 font-bold text-brown-800'>22g</td>
						</tr>
					</table>
				</section>
				{/* section 3 end */}
			</div>
		</div>
	)
}

export default App
