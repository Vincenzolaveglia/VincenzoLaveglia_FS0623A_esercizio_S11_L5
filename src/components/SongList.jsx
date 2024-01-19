import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import SingleAlbum from "./SingleAlbum";

const SongList = (props) => {
	const baseEndpoint = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
	let headers = new Headers({

		"X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
		"X-RapidAPI-Key": "6e85a2755bmsh8d7d68ee0f84f37p153c1djsn4c09afbb6f6d",
	});
	const [songInfoArr, setSongInfoArr] = useState([]);
	useEffect(() => {
		let randomArtists = [];

		while (randomArtists.length < 4) {

			let artist = props.arrArtists[Math.floor(Math.random() * props.arrArtists.length)]; // select an 
			if (!randomArtists.includes(artist)) {

				randomArtists.push(artist);
			}
		}
		for (let j = 0; j < randomArtists.length; j++) {
			fetch(baseEndpoint + randomArtists[j], {
				method: "GET",
				headers,
			})
				.then((response) => {
					if (response.ok) {
						return response.json();
					} else {
						console.log("error");
					}
				})
				.then((result) => {
					setSongInfoArr((prevArray) => [...prevArray, result.data[0]]);
				})
				.catch((err) => console.log(err));
		}
	}, []);
	return (
		<Row>
			<Col xs={10}>
				<div id="hiphop">
					<h2>{props.listName}</h2>
					<Row className=" row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="hipHopSection">
						{songInfoArr ? (
							songInfoArr.map((songInfo) => <SingleAlbum key={songInfo.id} songInfo={songInfo} />)
						) : (
							<div>c'è un problema</div>
						)}
					</Row>
				</div>
			</Col>
		</Row>
	);
};
export default SongList;