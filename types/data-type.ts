type DataImages = {
	png: string
	webp: string
}

type TechnologyImage = {
	portrait: string
	landscape: string
}

interface IDestination {
	name: string
	images: DataImages
	description: string
	distance: string
	travel: string
}

interface ICrew {
	name: string
	images: DataImages
	role: string
	bio: string
}

interface ITechnology {
	name: string
	images: TechnologyImage
	description: string
}
