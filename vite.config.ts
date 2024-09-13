import { defineConfig } from 'vite';
import Server from './Server';

export default defineConfig({
  base: '/Celestron/',
  server: {
    hmr: false,    
  },
  plugins: [{
	  name: 'mock-server',
    configureServer: (server) => Server(server),
    apply: 'serve'
  }]
})