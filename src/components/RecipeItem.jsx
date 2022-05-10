import { useNavigate } from "react-router-dom";

function RecipeItem(props) {
    const navigate = useNavigate();

    const {
        strArea,
        strCategory,
        strInstructions,
        strMeal,
        strMealThumb,
        strTags,
        strYoutube,
    } = props;

    const styleName = {
        display: "flex",
        justifyContent: "center",
        fontFamily: "Century Gothic",
        fontSize: "20px",
        fontWeight: "700",
        padding: "10px 0",
    };

    return (
        <>
            <button
                className="btn"
                style={{ marginBottom: "1.5rem" }}
                onClick={() => navigate(-1)}
            >
                Go back
            </button>
            <div className="card-image">
                <img
                    src={strMealThumb}
                    alt={strMeal}
                    style={{
                        objectFit: "cover",
                        width: "100%",
                        maxHeight: "20rem",
                        borderRadius: "10px",
                    }}
                />
            </div>
            <div className="card-content">
                <div className="card-title  grey-text text-darken-4">
                    <span style={styleName}>{strMeal}</span>
                    <i className="right grey-text">
                        Tags: {strTags ? strTags : "Nothing"}
                    </i>
                </div>
                <div className="grey-text">Category: {strCategory}</div>
                <div className="grey-text">
                    Area: {strArea ? strArea : "Unknown"}
                </div>
                <h6
                    className="card-title grey-text text-darken-4"
                    style={{
                        fontFamily: "Century Gothic",
                        textDecoration: "underline",
                        margin: "5px 0",
                    }}
                >
                    Instruction for cooking:
                </h6>
                <div
                    style={{
                        fontSize: "16px",
                        paddingBottom: "10px",
                    }}
                >
                    {strInstructions}
                </div>
                <table className="centered">
                    <thead>
                        <tr>
                            <th>Ingredient</th>
                            <th>Measure</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.keys(props).map((key) => {
                            if (key.includes("Ingredient") && props[key]) {
                                return (
                                    <tr key={key}>
                                        <td>{props[key]}</td>
                                        <td>
                                             {
                                                props[
                                                    `strMeasure${key.slice(13)}`
                                                ]
                                            }
                                        </td>
                                    </tr>
                                );
                            }
                            return null;
                        })}
                    </tbody>
                </table>
                <h6
                    style={{
                        fontFamily: "Century Gothic",
                        textDecoration: "underline",
                        margin: "15px 0",
                    }}
                >
                    Video recipe:
                </h6>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <iframe
                        style={{
                            minWidth: "100%",
                            height: "30rem",
                        }}
                        title={strMeal}
                        src={
                            `https://www.youtube.com/embed/${strYoutube.slice(
                                -11
                            )}` || "https://www.youtube.com/watch?v=mhDJNfV7hjk"
                        }
                        allowFullScreen
                    />
                </div>
            </div>
        </>
    );
}

export { RecipeItem };
