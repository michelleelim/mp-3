import Calculator from "../components/Calculator";

export default function Projects() {
    return (
        <>
            <h2>Projects</h2>
            <br/><br/>
            <h3>Spotify Recommendation Model | CS506 Data Science Tools and Applications</h3>
            <p>Feb 2026 - Apr 2026</p>
            <ul>
                <li>Analyzed Spotify listening histories and audio features across 4 Kaggle datasets using Pandas and
                    Seaborn
                </li>
                <li>Feature-engineered and tuned hyperparameters to implement KNN, Cosine Similarity, and XGBoost models
                    for song recommendation, preference classification, and skip prediction
                </li>
            </ul>
            <br/><br/>
            <h3>Yelp Food Review Predictor | DS340 Introduction to AI & Machine Learning</h3>
            <p>Feb 2026 - Apr 2026</p>
            <ul>
                <li>Trained and tested multimodal temporal models to predict food trends from Yelp reviews for 3
                    cities
                </li>
                <li>Utilized 5+ Python libraries and packages to clean and normalize the data in order to observe
                    respective trend scores
                </li>
            </ul>
            <br/><br/>
            <Calculator />
        </>
    );
}