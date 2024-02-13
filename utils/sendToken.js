export const sendToken = (res, user, message, statusCode = 200) => {
  try {
    const token = user.getJWTToken();
    const refreshToken = user.getRefreshToken();
    const options = {
      expires: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000), // 15 days token valid
      httpOnly: true,
      secure: true,
      // sameSite: true,
    };
    res
      .status(statusCode)
      .cookie("authToken", token, options)
      .cookie("refreshToken", refreshToken, options)
      .json({
        success: true,
        message,
        user,
      });
  } catch (error) {
    console.log(error);
  }
};
