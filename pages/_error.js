export default function Error({ statusCode }) {
  return (
    <p>
      {statusCode
        ? `An ${statusCode} occurred on server`
        : "An error ocurred on client"}
    </p>
  );
}

Error.getIntialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
