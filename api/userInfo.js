module.exports = async function (context, req) {
    context.res = {
        body: req.headers["x-ms-client-principal"] ? "Authenticated" : "Not Authenticated"
    };
};
