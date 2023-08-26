import { defineConfig } from "vite"
import pugPlugin from "vite-plugin-pug"
import { resolve } from "path"

const options = { pretty: true }
const locals = { name: "My Pug" }

export default defineConfig({
    plugins: [pugPlugin(options, locals)],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                adult1: resolve(__dirname, 'adult-1.html'),
                adult2: resolve(__dirname, 'adult-2.html'),
                adult3: resolve(__dirname, 'adult-3.html'),
                club: resolve(__dirname, 'club.html'),
                company: resolve(__dirname, 'company.html'),
                contacts: resolve(__dirname, 'contacts.html'),
                discount: resolve(__dirname, 'discount.html'),
                kids: resolve(__dirname, 'kids.html'),
                rules: resolve(__dirname, 'rules.html'),
                team: resolve(__dirname, 'team.html'),
                test: resolve(__dirname, 'test.html'),
                test2: resolve(__dirname, 'test-2.html'),
                thanks: resolve(__dirname, 'thanks.html'),
            },
        },
    },
})
