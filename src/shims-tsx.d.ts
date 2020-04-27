import Vue, { VNode } from 'vue'

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {
    }

    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {
    }

    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $style: {
      [key: string]: string;
    };
  }

  interface VueConstructor {
    $style: {
      [key: string]: string;
    };
  }
}

interface RenumberButtonOption {
  min: number;
  max: number;
  step: number;
  text: string;
}
