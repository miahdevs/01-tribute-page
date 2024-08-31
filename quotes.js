const quotes = [
  "Only if your god can outrage and challenge you will you know that you worship the real God and not a figment of your imagination. . . . If your god never disagrees with you, you might just be worshiping an idealized version of yourself.",
  "The gospel is that I am so sinful that Jesus had to die for me, yet so loved and valued that Jesus was glad to die for me. This leads to deep humility and deep confidence at the same time. I can’t feel superior to anyone, and yet I have nothing to prove to anyone.",
  "The doctrine of sin means believers are never as good as our true worldview should make us. And the doctrine of common grace means unbelievers are never as flawed as their false worldview should make them.",
  "To say ‘I know God forgives me, but I can’t forgive myself’ means you’ve failed an idol whose approval is more important than God’s.",
  "You don’t fall into love. You commit to it. Love says, ‘I will be there no matter what.’",
  "Contemporary people tend to examine the Bible, looking for things they can’t accept; but Christians should reverse that, allowing the Bible to examine us, looking for things God can’t accept.",
  "Describe the God you’ve rejected. Describe the God you don’t believe in. Maybe I don’t believe that God either.",
  "If Jesus rose from the dead, then you have to accept all that he said. If he didn’t, then why worry about any of what he said? The issue on which everything hangs is not whether you like his teaching, but whether he rose from the dead.",
  "The central basis of Christian assurance is not how much our hearts are set on God, but how unshakably his heart is set on us.",
  "All death can now do to Christians is to make their lives infinitely better."
]

const quotesEl = document.querySelector('.quotes > ul');

quotes.forEach(quote => {
  const li = document.createElement('li');
  li.textContent = quote;
  quotesEl.appendChild(li);
});