function ResultDisplay({ selectedName, selectedImage }) {
  return (
    <div>
      <h2>💑 Prediction Result 💑</h2>
      {selectedName ? (
        <>
          <h3>🥰 {selectedName} is getting committed this February! 🥳</h3>
          <h2>{selectedName} FUTURE WIFE</h2>
          <img src={selectedImage} alt="Future Wife" width="300" />
          <p>
            Note :if you are a female your hushand will be male version of this
          </p>
        </>
      ) : (
        <p>No prediction yet. Enter names and click Predict!</p>
      )}
    </div>
  );
}

export default ResultDisplay;
