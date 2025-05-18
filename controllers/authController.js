// Register new user
const register = async (req, res, next) => {
  const { firstName, lastName, username, password } = req.body;
  console.log({ firstName, lastName, username, password });
  
  try {
    const newUser = { firstName, lastName, username, password };
    console.log("New user registered:", newUser);
    
    return res.status(201).json({
      success: { message: "New user is created" },
      data: { newUser }
    });
  } catch (error) {
    return res.status(500).json({
      error: { message: "Internal server error!" }
    });
  }
};

// Login user
const login = async (req, res, next) => {
  return res.status(200).json({
    success: { message: "User logged in." }
  });
};

// Logout user
const logout = async (req, res, next) => {
  console.log("Initializing logout controller logic...");
  
  res.clearCookie('connect.sid');
  
  function sessionDestruction(err) {
    if (err) {
      return next(err);
    }
  }
  sessionDestruction();
  
  console.log("Logout function activated. Logging out...");
  
  return res.status(200).json({
    success: { message: "User logging out" }
  });
};

// Local login
const localLogin = async (req, res, next) => {
  let result = true;
  
  function mockPassport(err, user) {
    if (err) {
      return next(err);
    }
  }
  mockPassport();
  
  return res.status(200).json({
    success: { message: "Login successful." },
    result
  });
};

module.exports = { register, login, logout, localLogin };
