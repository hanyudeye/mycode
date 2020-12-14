public class StringBuilders {
    public static void main(String[] args) {
        StringBuilder builder = new StringBuilder();

        builder.append("hello ");
        builder.append("world ");
        builder.append("你好 ");
        builder.append("世界 ");

        String CompleteString= builder.toString();

        System.out.println(CompleteString);

    }

}
