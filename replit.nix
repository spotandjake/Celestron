{ pkgs }: {
    deps = [
        pkgs.nodejs-18_x
        pkgs.yarn
        pkgs.nodePackages.typescript
        pkgs.nodePackages.typescript-language-server
    ];
}