import axios from "axios";
import FormData from "form-data";

const deepSeekCoder = {
   chat: async (question) => {
      let d = new FormData();
      d.append("content", `User: ${question}`);
      d.append("model", "@hf/thebloke/deepseek-coder-6.7b-instruct-awq");
      
      let head = {
         headers: {
            ...d.getHeaders()
         }
      };
      
      let { data: ak } = await axios.post("https://mind.hydrooo.web.id/v1/chat", d, head);
      
      return ak.result;
   }
};

export default deepSeekCoder;