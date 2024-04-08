public class Facade {
    public string registrar(string nome, int id) {
        return "Cliente " + nome + "()" + id + ") registrado";
    }

    public string comprar(int prod, int cliente) {
        return "Produto " + prod + " comprado por " + cliente;
    }

    public string fecharCompra(int cliente) {
        return "Compra de " + cliente + " finalizada";
    }

    public static void main(string[] args) {
        Facade f = new Facade();
        System.out.println(f.registrar("João", 1));
        System.out.println(f.comprar(222, 1));
        System.out.println(f.comprar(223, 1));
        System.out.println(f.comprar(224, 1));
        System.out.println(f.comprar(333, 1));
        System.out.println(f.fecharCompra(1));
    }
}
