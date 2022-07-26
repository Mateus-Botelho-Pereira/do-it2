export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      AddPostIt: { CurrentTheme: string };
      EditPostIt: { CurrentTheme: string, postItSelected: PostItProps };
    }
  }
}