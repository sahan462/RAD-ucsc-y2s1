const viewgreeting = (req, res) => {
    const {name} = req.params;
    res.status(200).send("Hello "+ name);
}


module.exports = {
    viewgreeting
}