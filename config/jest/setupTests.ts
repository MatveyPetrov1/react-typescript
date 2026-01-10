import "@testing-library/jest-dom";

import { TextEncoder, TextDecoder } from "util";

// eslint-disable-next-line
global.TextEncoder = TextEncoder as any;
// eslint-disable-next-line
global.TextDecoder = TextDecoder as any;
