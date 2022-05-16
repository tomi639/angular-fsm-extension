import { ShellSdk, SHELL_EVENTS } from 'fsm-shell';

export class ShellSdkConnector {

    private shellSdk: ShellSdk | undefined = undefined;
    private insideShell: boolean;
    private context: any;

    constructor() {
        if (ShellSdk.isInsideShell()) {
            this.shellSdk = ShellSdk.init(parent, '*');
        }
        this.insideShell = !!this.shellSdk;

        this.context = () => new Promise<{[x: string]: any}>((resolve, reject) => {
            if (!this.shellSdk) {
                reject('App is not runnning inside Shell');
                return;
            }
            // init the extension by requesting the fsm context
            this.shellSdk.emit(SHELL_EVENTS.Version1.REQUIRE_CONTEXT, {
                auth: {
                    response_type: 'token' // request a user token within the context
                }
            });
            //callback on fsm context response
            this.shellSdk.on(SHELL_EVENTS.Version1.REQUIRE_CONTEXT, (event: string) => {
                resolve(JSON.parse(event));
            });
        });
    }

    isInsideShell() {
        return this.insideShell;
    }

    getContext() {
        return this.context;
    }
}