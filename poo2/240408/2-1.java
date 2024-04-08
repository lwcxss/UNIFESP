public class SistemaFacade {
    private Escola escola;

    public SistemaFacade() {
        this.escola = new Escola();
    }

    public void matricular(String codAluno, String codCurso) {
        Aluno aluno = escola.getAluno(codAluno);
        Curso curso = escola.getCurso(codCurso);
        Turma turma = new Turma();
        turma.setCurso(curso);
        turma.addAluno(aluno);
    }

    public String exibirStatus(String codTurma) {
        Turma turma = escola.getTurma(codTurma);
        return "Curso:" + turma.getCurso().getNome() + " Alunos:" + Arrays.toString(turma.getAlunos().toArray());
    }
}
