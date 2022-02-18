async function saveData(data) {
  try {
    const someData = data;
    if (someData) return someData;
    else return false;
  } catch (error) {
    console.log("data not saved", error);
    return false;
  }
}

module.exports = saveData;
