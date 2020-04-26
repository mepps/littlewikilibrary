import React from 'react';
import { render } from '@testing-library/react';
import Images from './images';

test('renders image description', () => {
	const name = "Albatross";
	const images = [
	  {
		section_id: 0, 
		showInGallery: true, 
		srcset: [{ src: "//upload.wikimedia.org/wikipedia/commons/thumb/7/73/Short_tailed_Albatross1.jpg/640px-Short_tailed_Albatross1.jpg", scale: "1x" }], 
		title: "File:Short_tailed_Albatross1.jpg", 
		type: "image",
		caption: {
			html: "Skeleton of a black-browed albatross (<i id=\"mwZw\"><a rel=\"mw:WikiLink\" href=\"./Black-browed_albatross\" title=\"Black-browed albatross\" id=\"mwaA\">Thalassarche melanophris</a>)</i> on display at the <a rel=\"mw:WikiLink\" href=\"./Museum_of_Osteology\" title=\"Museum of Osteology\" id=\"mwaQ\">Museum of Osteology</a>.",
			text: "Skeleton of a black-browed albatross (Thalassarche melanophris) on display at the Museum of Osteology."}
	  }
	]
	const { getByText } = render(<Images images={images} />);
	const description = getByText(/Skeleton of a black-browed/i);
	expect(description).toBeInTheDocument();

});
