/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
const unknownEndpoint = (_request, response) => {
    response.status(404).send({ error: "unknown endpoint" });
};

export default unknownEndpoint;