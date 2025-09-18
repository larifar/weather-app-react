import day from "../assets/sun.svg"
import night from "../assets/night.svg"

export default function CityCard({ data }) {
	const handleDate = () => {
		const date = new Date();
		return date.toLocaleDateString("pt-BR", {
			day: "numeric",
			month: "long",
			year: "numeric",
			weekday: "long",
		});
	};

	return (
		<div className="citycard-container">
			<div className="city-date">
				<h2>{data.name ?? "Cidade, País"}</h2>
				<p>{handleDate()}</p>
			</div>
            <div className="temp">
                <img src={data.isDay? day : night} alt="" />
                <p>{data.temp}<span>{data.unit}</span></p>
            </div>
		</div>
	);
}
