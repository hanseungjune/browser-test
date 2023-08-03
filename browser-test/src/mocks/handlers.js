import { rest } from "msw";
import { HTTP_URL } from "../pages/CookiePage";

const fakeToken = "123456abcdef";

export const handlers = [
  // 로그인 API의 POST 요청 처리
  rest.post(`${HTTP_URL}/login`, (req, res, ctx) => {
    const { username, password } = req.body;

    // 유저네임과 비밀번호 검증 로직. 여기선 간단하게 예시를 들기 위해 username이 'test'이고, password가 'password'인 경우에만 로그인 성공으로 처리
    if (username === "test" && password === "password") {
      return res(
        ctx.status(200),
        ctx.json({
          token: fakeToken,
        })
      );
    } else {
      // 유저네임 혹은 비밀번호가 맞지 않을 경우
      return res(
        ctx.status(401),
        ctx.json({
          error: "Invalid username or password",
        })
      );
    }
  }),
];
