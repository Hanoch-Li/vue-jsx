const ButtonCounter = {
  name: "button-counter",
  props: ["count"],
  inheritAttrs: false,
  methods: {
    onClick() {
      this.$emit("change", this.count + 1);
    }
  },
  render() {
    return (
      <button onClick={this.onClick}>数量 {this.count}+</button>
    );
  }
};

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      text:'hello 纸没了飞机',
      inputText:'我吃了',
      count: 0
    }
  },
  watch: {},
  methods: {
    onChange(val) {
      this.count = val;
      alert(this.count)
    }
  },
  render() {
    const {text,count} = this
    return (
      <div>
        <h3 id="h0">内容</h3>
        <h3 id="h0">内容</h3>
     {/* 纯文本 */}
     <p>hello, I am Gopal</p>
     {/* 动态内容 */}
     <p>{ text }</p>
     <p>hello { this.msg }</p>
     {/* 输入框 */}
     <inputs/>
     <ButtonCounter
        style={{ marginTop: "10px" }}
        count={count}
        type="button"
        onChange={this.onChange}
      />
      </div>
    )
  }
}


