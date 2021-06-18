function Error({ statusCode }) {
  return (
    <div className="flex items-center h-full text-6xl mt-[20vh] text-red-400">
      <p>{statusCode ? `Erro ${statusCode}` : 'Ocurreu un erro no cliente'}</p>
    </div>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
