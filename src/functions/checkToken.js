function Token() {
  const sessionToken = sessionStorage.getItem("token");
  const localToken = localStorage.getItem("token");

  let token;

  if (localToken) {
    token = localToken;
  }
  if (sessionToken) {
    token = sessionToken;
  }
  return token;
}

export default Token;
