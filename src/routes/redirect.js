
export async function GET({ url }) {
    let urlParams = new URL(url);
    if (!urlParams.searchParams.get('url').startsWith('vscode://')) {
        return {
            status: 403,
        }
    }
    return {
        status: 302,
        headers: { Location: urlParams.searchParams.get('url') },
        redirect: urlParams.searchParams.get('url')
    };
}